import { IonContent, IonGrid, IonPage } from '@ionic/react'
import { useEffect, useState } from 'react'
import { invitationLists } from '../../api/AxiosProvider'
import NotificationSkeletonLoader from '../../components/skeletonloader/NotificationSkeletonLoader'
import ToolbarComponent from '../../components/toolbar/ToolbarComponent'
import InvitationCard from './component/InvitationCard'
import './InvitationPage.scss'

const InvitationPage = () => {
  const [invitation, setInvitation] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  //const [totalInvitation, settotalInvitation] = useState<any>(0);
  const [notifData, setNotifData] = useState<any>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getProjectInvitation = async page => {
    const params = { status: '' }
    const response = await invitationLists(page, params)
    //settotalInvitation(response.total);
    console.log(response.invitations)
    if (response && response.invitations) {
      setInvitation(previnvitation => [
        ...previnvitation,
        ...response.invitations
      ])
      setIsLoading(false)
      setPage(page => page + 1)
    }
  }

  useEffect(() => {
    getProjectInvitation(page)
  }, [])

  return (
    <IonPage>
      <ToolbarComponent />
      <IonContent>
        <IonGrid>
          {isLoading ? (
            <NotificationSkeletonLoader />
          ) : (
            invitation.map((data: any, index: any) => (
              <InvitationCard
                data={data}
                key={index}
                index={index}
                totalInvitation={invitation.length}
                setNotifData={setNotifData}
                setIsMenuOpen={setIsMenuOpen}
                getProjectInvitation={getProjectInvitation}
              />
            ))
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default InvitationPage
