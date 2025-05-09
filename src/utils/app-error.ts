type AppErrorConstructor = {
  messageToUser: string;
  statusCode: number;
  error?: Error;
};

class AppError {
  constructor(data: AppErrorConstructor) {
    this.messageToUser = data.messageToUser;
    this.statusCode = data.statusCode;
    this.error = data.error;
  }

  messageToUser: string;
  statusCode: number;
  error?: Error;
}

export default AppError;
