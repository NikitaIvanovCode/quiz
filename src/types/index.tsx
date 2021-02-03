import TAuthUser from './TAuthUser'
import TUserProfile from './TUserProfile'
import TChangeName from './TChangeName'
import TExitProfile from './TExitProfile'
import TSetShowForm from './TSetShowForm'
import TSetCloseForm from './TSetCloseForm'
import TPublishPost from './TPublishPost'
import TSubscribeToUser from './TSubscribeToUser'
import TUnsubscribeFromUser from './TUnsubscribeFromUser'
import TRemovePost from './TRemovePost'
import TLikePost from './TLikePost'
import TUnlikePost from './TUnlikePost'
import TRouteSubs from './TRouteSubs'
import TRoutePosts from './TRoutePosts'
import TGetSubscribList from './TGetSubscribList'

type Actions = TAuthUser | TUserProfile | TChangeName | TExitProfile | TSetShowForm | TSetCloseForm | TPublishPost | TSubscribeToUser | TUnsubscribeFromUser | TRemovePost | TLikePost | TUnlikePost | TRouteSubs | TRoutePosts | TGetSubscribList

export { Actions, TAuthUser, TUserProfile, TChangeName, TExitProfile, TSetShowForm, TSetCloseForm, TPublishPost, TSubscribeToUser, TUnsubscribeFromUser, TRemovePost, TLikePost, TUnlikePost, TRouteSubs, TRoutePosts, TGetSubscribList }

