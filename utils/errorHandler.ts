import {response} from "express";

export const errorHandler = (error: any) => {
  return response.status(500).json({
    success: false,
    message: error.message ? error.message : error
  })
}
