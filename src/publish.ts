import { IncomingWebhook } from '@slack/webhook';
import { SLACK_WEBHOOK_URL } from './config';
import { IMessage } from './models';

const webhook: IncomingWebhook = new IncomingWebhook(SLACK_WEBHOOK_URL, {
  username: 'Alert',
  text: '',
  icon_emoji: ':warning:',
});

export let publish: (event: any) => Promise<any>;

// @ts-ignore
publish = async (message: IMessage): Promise<any> => {
  return await webhook.send({
    text: message.subject,
    attachments: [
      {
        fallback: 'information is unavailable',
        fields: [
          {title: message.title, value: message.message, short: false},
        ],
      },
    ],
  });
};
