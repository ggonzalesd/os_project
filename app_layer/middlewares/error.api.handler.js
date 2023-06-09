function errorLoggerHandler(err, req, res, next) {
  console.log(err)
  next(err)
}

function boomErrorHandler(err, req, res, next) {
  if ( err.isBoom ){
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

function serverErrorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function applyErrorHandlers(app) {
  app.use(errorLoggerHandler)
  app.use(boomErrorHandler)
  app.use(serverErrorHandler)
}

module.exports = applyErrorHandlers
