const errorHandler = (err, req, res, next) => {  
  const statusCode = err.status || res.statusCode || 500;
  res.status(statusCode).json({
    error: true,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
}

module.exports = {
  errorHandler
}