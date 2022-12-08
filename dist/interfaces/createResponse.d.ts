interface answerStatement {
    no: number;
    answer: string;
}
export interface createResponseInput {
    responses: [answerStatement];
}
export interface savedResponse extends createResponseInput {
    user: any;
    surveyId: string;
    surveyResponse: Array<string | number>;
}
export {};
