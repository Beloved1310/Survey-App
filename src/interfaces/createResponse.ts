interface answerStatement {
  no: number;
  answer: string;
}

export interface createResponseInput {
  responses: [answerStatement];
}
