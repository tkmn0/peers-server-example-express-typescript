import MessageBuilder from '#/signaling/message_builder';

describe('message_builder', (): void => {
  test('create offer message', (): void => {
    const clientCount = 3;
    const message = MessageBuilder.createOfferMessage(clientCount);
    expect(message.data.clients).toBe(clientCount);
  });
});
