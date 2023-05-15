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

  ding: (call, callback) => {
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

  messageFileStream: (call) => {
    void call
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

  messageImageStream: (call) => {
    void call
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

  messageSendFileStream: (call, callback) => {
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

  tagContactAdd: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagContactDelete: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagContactList: (call, callback) => {
    void call
    void callback
    throw new Error('not implemented.')
  },

  tagContactRemove: (call, callback) => {
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
  currentUser: function (call: ServerUnaryCall<puppet.CurrentUserRequest, puppet.CurrentUserResponse>, callback: sendUnaryData<puppet.CurrentUserResponse>): void {
    throw new Error('Function not implemented.')
  },
  conversationRead: function (call: ServerUnaryCall<ConversationReadRequest, ConversationReadResponse>, callback: sendUnaryData<ConversationReadResponse>): void {
    throw new Error('Function not implemented.')
  },
  messageChannel: function (call: ServerUnaryCall<puppet.MessageChannelRequest, puppet.MessageChannelResponse>, callback: sendUnaryData<puppet.MessageChannelResponse>): void {
    throw new Error('Function not implemented.')
  },
  messageSendChannel: function (call: ServerUnaryCall<puppet.MessageSendChannelRequest, puppet.MessageSendChannelResponse>, callback: sendUnaryData<puppet.MessageSendChannelResponse>): void {
    throw new Error('Function not implemented.')
  },
  messagePreview: function (call: ServerUnaryCall<puppet.MessagePreviewRequest, puppet.MessagePreviewResponse>, callback: sendUnaryData<puppet.MessagePreviewResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagContactTagAdd: function (call: ServerUnaryCall<puppet.TagContactTagAddRequest, puppet.TagContactTagAddResponse>, callback: sendUnaryData<puppet.TagContactTagAddResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagContactTagRemove: function (call: ServerUnaryCall<puppet.TagContactTagRemoveRequest, puppet.TagContactTagRemoveResponse>, callback: sendUnaryData<puppet.TagContactTagRemoveResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagGroupAdd: function (call: ServerUnaryCall<puppet.TagGroupAddRequest, puppet.TagGroupAddResponse>, callback: sendUnaryData<puppet.TagGroupAddResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagGroupDelete: function (call: ServerUnaryCall<puppet.TagGroupDeleteRequest, puppet.TagGroupDeleteResponse>, callback: sendUnaryData<puppet.TagGroupDeleteResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagGroupPayload: function (call: ServerUnaryCall<puppet.TagGroupPayloadRequest, puppet.TagGroupPayloadResponse>, callback: sendUnaryData<puppet.TagGroupPayloadResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagTagAdd: function (call: ServerUnaryCall<puppet.TagTagAddRequest, puppet.TagTagAddResponse>, callback: sendUnaryData<puppet.TagTagAddResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagTagDelete: function (call: ServerUnaryCall<puppet.TagTagDeleteRequest, puppet.TagTagDeleteResponse>, callback: sendUnaryData<puppet.TagTagDeleteResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagPayload: function (call: ServerUnaryCall<puppet.TagPayloadRequest, puppet.TagPayloadResponse>, callback: sendUnaryData<puppet.TagPayloadResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagGroupList: function (call: ServerUnaryCall<puppet.TagGroupListRequest, puppet.TagGroupListResponse>, callback: sendUnaryData<puppet.TagGroupListResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagGroupTagList: function (call: ServerUnaryCall<puppet.TagGroupTagListRequest, puppet.TagGroupTagListResponse>, callback: sendUnaryData<puppet.TagGroupTagListResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagTagList: function (call: ServerUnaryCall<puppet.TagTagListRequest, puppet.TagTagListResponse>, callback: sendUnaryData<puppet.TagTagListResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagContactTagList: function (call: ServerUnaryCall<puppet.TagContactTagListRequest, puppet.TagContactTagListResponse>, callback: sendUnaryData<puppet.TagContactTagListResponse>): void {
    throw new Error('Function not implemented.')
  },
  tagTagContactList: function (call: ServerUnaryCall<puppet.TagTagContactListRequest, puppet.TagTagContactListResponse>, callback: sendUnaryData<puppet.TagTagContactListResponse>): void {
    throw new Error('Function not implemented.')
  },
  postPayloadSayable: function (call: ServerUnaryCall<PostPayloadSayableRequest, PostPayloadSayableResponse>, callback: sendUnaryData<PostPayloadSayableResponse>): void {
    throw new Error('Function not implemented.')
  },
}
