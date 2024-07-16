import { IonCard, IonCardContent, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPopover, IonRow } from '@ionic/react'
import { archiveOutline, copyOutline, createOutline, ellipsisVertical, refreshOutline, star, trashOutline } from 'ionicons/icons'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import ProjectSkeleton from '../../../components/skeletonloader/ProjectSkeleton';
import { appContext } from '../../../context/AppContext';
import { projectLists } from '../../../api/AxiosProvider';


const ProjectCard = forwardRef((props, ref) => {
  const { currentMode, projectFilter, searchProject } = appContext();
  const [projectList, setProjectList] = useState<any>([]); 
  const [project, setProject] = useState<any>([]); 
  const [loading, setLoading] = useState<boolean>(false);
  const isTrash = useRef<HTMLIonModalElement>(null);
  const isArchive = useRef<HTMLIonModalElement>(null);
  const isRestore = useRef<HTMLIonModalElement>(null);
  const [isDuplicate, setIsDuplicate] = useState<any>(false);
  const [projectSettingsIsOpen, setProjectSettingsIsOpen] = useState(false);

  //use a ref and the useImperativeHandle hook to expose the function to the parent.
  useImperativeHandle(ref, () => ({
    getProjectLists,
  }));
    
  const getProjectLists = async () => {
    setLoading(true);
    const params = { status: projectFilter, name: searchProject };
    const response = await projectLists(params);
    if (response) {
      setProjectList(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectLists();
  }, [projectFilter,searchProject]);
  
  return (
    <>
    {loading ? <ProjectSkeleton/>
    // :projectList.length == 0 ?<ProjectNotFound/>
    :projectList.map((project:any) => {
      return(
        <IonCard mode="ios" key={project.id} className="prjoect-card" button  style={{background: currentMode == "dark" ?'#38404a':'#ffffff'}}>
          <IonCardContent className="ion-no-padding">
              <IonRow>
                  <IonCol size="11" className="ion-no-padding">
                      <IonItem lines="none" detail={false} routerLink={`/dashboard/project/${project.id}`}>
                      <div className="project-icon-bg" style={{backgroundColor:project.color+'50'}}><i style={{ color: project.color, fontSize:22 }} className={project.icon} ></i></div>
                        <IonLabel style={{ fontSize: 14, fontWeight: 500, paddingLeft: 20 }} > {project.name} </IonLabel>
                        {project.pivot.is_favorite == 1 ? ( <IonIcon icon={star} slot="end" style={{ fontSize: 15, color: '#fab341' }} ></IonIcon> ) : ( '' )}
                        {project.status == "archived" ? ( <div className='ribbon-tag ion-text-center'><IonLabel style={{fontSize:12,color:"#fff"}}>Archived</IonLabel></div> ) : project.status == "trashed" ? ( <div className='ribbon-tag ion-text-center'><IonLabel style={{fontSize:12,color:"#fff"}}>Trashed</IonLabel></div> ) : ( '' )}
                      </IonItem>
                  </IonCol>
                  <IonCol size="1">
                      <IonIcon icon={ellipsisVertical} style={{ fontSize: 20, color: '#6c757d' }} id={project.id} />
                        <IonPopover mode="ios" trigger={project.id} dismissOnSelect={false}>
                          <IonContent className={currentMode == "dark" ? "ion-content-dark" : "ion-content-light"}>
                            {/* <IonList>
                              <IonItem lines="none" button detail={false} className="item-text" onClick={()=>[setProjectSettingsIsOpen(true),setProject(project)]}> <IonIcon icon={createOutline} slot="start" className="menu-icon" ></IonIcon> Edit </IonItem>
                              <IonItem lines="none" button detail={false} className="item-text" onClick={()=>[setIsDuplicate(true),setProject(project)]} > <IonIcon icon={copyOutline} slot="start" className="menu-icon" ></IonIcon> Duplicate  </IonItem>
                              {project.pivot.user_level == '1' ? <>
                                {project.status == "archived" ? ( <IonItem lines="none" button detail={false} className="item-text" id='isRestore'> <IonIcon icon={refreshOutline} slot="start" className="menu-icon" ></IonIcon> Restore </IonItem> ) : project.status == "trashed" ? ( <IonItem lines="none" button detail={false} className="item-text" id='isRestore'> <IonIcon icon={refreshOutline} slot="start" className="menu-icon" ></IonIcon> Restore </IonItem> ) : ( <IonItem lines="none" button detail={false} className="item-text" id='isArchive'> <IonIcon icon={archiveOutline} slot="start" className="menu-icon" ></IonIcon> Archive </IonItem> )}
                                {project.status == "archived" ? ( <IonItem lines="none" className="item-text" id='isTrash'><IonIcon icon={trashOutline} slot="start" className="menu-icon" ></IonIcon> Trashed </IonItem> ) : project.status == "trashed" ? ( <IonItem lines="none" button detail={false} className="item-text" id='isArchive'> <IonIcon icon={archiveOutline} slot="start" className="menu-icon" ></IonIcon> Archived </IonItem> ) : ( <IonItem lines="none" button detail={false} className="item-text" id='isTrash'> <IonIcon icon={trashOutline} slot="start" className="menu-icon" ></IonIcon> Trashed </IonItem> )}
                                    <IonModal id="project-modal" ref={isArchive} trigger='isArchive'>
                                      <ArchiveProjectModal isArchive={isArchive} project_id={project.id} getProjectLists={getProjectLists}/>
                                    </IonModal>
                                    <IonModal id="project-modal" ref={isTrash} trigger='isTrash'>
                                      <TrashProjectModal isTrash={isTrash} project_id={project.id} getProjectLists={getProjectLists} />
                                    </IonModal>
                                    <IonModal id="project-modal" ref={isRestore} trigger='isRestore'>
                                      <RestoreProjectModal isRestore={isRestore} project_id={project.id} getProjectLists={getProjectLists}/>
                                    </IonModal>
                              </>:''}
                            </IonList> */}
                          </IonContent>
                        </IonPopover>
                  </IonCol>
              </IonRow>
          </IonCardContent>
      </IonCard>
      )})
    }
    
    {/* <IonModal isOpen={isDuplicate} className="animate__animated animate__slideInRight">
      <DuplicateProject project={project} setIsDuplicate={setIsDuplicate} getProjectLists={getProjectLists}/>
    </IonModal>
    <IonModal isOpen={projectSettingsIsOpen} backdropDismiss={false} className="animate__animated animate__slideInRight">
      <ProjectSettings closeModal={setProjectSettingsIsOpen} project={project} getProjectLists={getProjectLists} />
    </IonModal> */}

  </>
  );
});

export default ProjectCard