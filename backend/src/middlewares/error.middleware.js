export const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      errors: err.errors,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};