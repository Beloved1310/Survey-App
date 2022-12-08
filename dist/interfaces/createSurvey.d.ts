interface questionStatement {
    no: number;
    questionStatement: string;
}
export interface createSurveyInput {
    title: string;
    questions: [questionStatement];
}
export {};
