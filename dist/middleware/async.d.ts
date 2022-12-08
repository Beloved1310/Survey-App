import { Request, Response, NextFunction } from 'express';
export declare const asyncErrorhandling: (handler: any) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
