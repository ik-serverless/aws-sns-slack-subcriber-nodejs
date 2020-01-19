import { SNSEvent, SNSEventRecord } from 'aws-lambda';

interface LambdaResponse {
  statusCode: number;
  body: string;
}

interface IMessage {
  subject: string;
  message: string;
  title: string;
}

class EventProcessor {
  private readonly Records: SNSEventRecord[];
  private readonly hasRecords: boolean;
  private readonly count: number;

  constructor(protected event: SNSEvent) {
    this.Records = event.Records;
    this.hasRecords = event.Records && event.Records.length > 0;
    this.count = event.Records.length;
  }

  public get recordCount(): number {
    return this.count;
  }

  public getMessages(): IMessage[] {
    const isSNSEvent = (record: any): boolean => record.EventSource === 'aws:sns';
    const convert = (record: SNSEventRecord): IMessage => {
      const msg = JSON.parse(record.Sns.Message);
      const description = msg?.AlarmDescription;
      const name = msg?.AlarmName;
      return {
        message: description,
        subject: record.Sns.Subject,
        title: name,
      };
    };

    if (this.hasRecords) {
      return this.Records.filter(isSNSEvent).map(convert);
    } else {
      return [];
    }
  }
}

export { LambdaResponse, EventProcessor, IMessage };
