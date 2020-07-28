using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad request",

                401 => "You are not, authorized",

                404 => "Resource not found",

                500 => "Error",

                _ => null 
            };
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}