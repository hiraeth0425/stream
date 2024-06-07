import giftList from './gifts'

export default (app: any) => {
  app.provide('giftList', giftList)
}
