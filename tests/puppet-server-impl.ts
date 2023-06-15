/* eslint-disable sort-keys */
import type {
  puppet,
}                       from '../src/mod.js'

type IPuppetServer = puppet.IPuppetServer

/**
 * Implements the SayHello RPC method.
 */
export const puppetServerImpl: IPuppetServer = {

  contactAlias: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactAvatar: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactCorporationRemark: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented')
  },

  contactDescription: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented')
  },

  contactDelete: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented')
  },

  contactList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactPhone: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactSelfName: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactPayloadModify: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactSelfQRCode: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  contactSelfSignature: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  conversationRead: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  ding: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  currentUser: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  dirtyPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  event: (streamnigCall) => {
    void streamnigCall
    throw new Error('not implemented.')

  },

  friendshipAccept: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  friendshipAdd: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  friendshipPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  friendshipSearchPhone: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  friendshipSearchWeixin: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  friendshipSearchHandle: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  logout: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageContact: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageFile: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageForward: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageImage: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageLocation: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageMiniProgram: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messagePayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageRecall: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendContact: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendFile: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendLocation: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendMiniProgram: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendText: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendUrl: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageUrl: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageSendChannel: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messageChannel: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  messagePreview: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  getMessageBroadcastTarget: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  createMessageBroadcast: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  getMessageBroadcastStatus: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomAdd: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomAnnounce: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomAvatar: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomCreate: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomDel: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomInvitationAccept: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomInvitationPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomMemberList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomMemberPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomQRCode: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomQuit: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomTopic: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomRemark: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomOwnerTransfer: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  roomPermission: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  start: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  stop: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagContactTagAdd: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagContactTagRemove: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagGroupAdd: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagGroupDelete: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagTagAdd: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagTagDelete: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagGroupList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagGroupTagList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagTagList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagContactTagList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagTagContactList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagGroupPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  momentPublish: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  momentUnpublish: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  postTap: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  momentSignature: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  momentCoverage: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  postPayload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  postPayloadSayable: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  momentVisibleList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  version: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  download: (call) => {
    void call
    throw new Error('not implemented.')
  },

  upload: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

}
