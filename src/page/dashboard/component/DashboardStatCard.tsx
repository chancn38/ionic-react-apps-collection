import { IonCard, IonCardContent, IonCol, IonLabel, IonRow } from '@ionic/react';
import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react';
import { projectDashboardStats } from '../../../api/AxiosProvider';
import { DashboardStatSkeleton } from '../../../components/skeletonloader/DashboardStatSkeleton';
import './DashboardStatCard.scss';

const DashboardStatCard = forwardRef((props, ref) => {
  const [stats, setStats] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProjectStats = async () => {
    setLoading(true);
    const params = {};
    const response = await projectDashboardStats(params);
    if (response && response.data) {
      setStats(response.data.statistics);
      setLoading(false);
    }
  };

  //use a ref and the useImperativeHandle hook to expose the function to the parent.
  useImperativeHandle(ref, () => ({
    getProjectStats,
  }));

  useEffect(() => {
    getProjectStats();
  }, []);

  return (
    <IonRow>
      { stats.length == 0 ? null
      : loading ? <DashboardStatSkeleton /> 
      : stats.map((dashboard, index) => {
          return (
            <IonCol className='ion-no-padding' size='6' key={index}>
              <IonCard
                mode='ios'
                className={`home-card bg-${dashboard.color}`}
                style={{
                  height: index === 0 ? 130 : index === 3 ? 130 : 150,
                  marginTop: index === 2 ? -15 : ''
                }}
              >
                <IonCardContent style={{ paddingLeft: 5, paddingRight: 5 }}>
                  <IonRow>
                    <IonCol className='ion-no-padding ion-text-left project-card-icon'>
                      <div
                        style={{
                          width:
                            index === 1 ? 50 : index === 2 ? 50 : '',
                          height:
                            index === 1 ? 50 : index === 2 ? 50 : ''
                        }}
                      >
                        <i className={dashboard.icon}></i>
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow
                    className='ion-text-left'
                    style={{
                      marginTop:
                        index === 1 ? 20 : index === 2 ? 20 : '',
                      paddingLeft: 10
                    }}
                  >
                    <IonCol
                      size='12'
                      style={{
                        marginTop:
                          index === 1 ? -10 : index === 2 ? -10 : ''
                      }}
                    >
                      <IonLabel style={{ fontSize: 24 }}>
                        {dashboard.count}
                      </IonLabel>
                    </IonCol>
                    <IonCol size='12' style={{ marginTop: -10 }}>
                      <IonLabel style={{ fontSize: 12, opacity: '0.6' }}>
                        {dashboard.name === 'Task Today'
                          ? 'Tasks Today'
                          : dashboard.name}
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          );
        })}
    </IonRow>
  );
});

export default memo(DashboardStatCard);
