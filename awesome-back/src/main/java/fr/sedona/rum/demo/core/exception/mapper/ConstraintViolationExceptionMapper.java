package fr.sedona.rum.demo.core.exception.mapper;


/**
 * Custom constraint violation mapper to return custom formatted response
 */
public class ConstraintViolationExceptionMapper {
//public class ConstraintViolationExceptionMapper implements ExceptionMapper<ConstraintViolationException> {
//
//    @Override
//    public Response toResponse(ConstraintViolationException exception) {
//        var apiResponseError = new ApiErrorResponseDto(
//            formatReason(exception)
//        );
//
//        return Response
//            .status(Response.Status.BAD_REQUEST.getStatusCode())
//            .entity(apiResponseError)
//            .type(MediaType.APPLICATION_JSON)
//            .build();
//    }
//
//    private String formatReason(ConstraintViolationException exception) {
//        List<String> errors = new ArrayList<>();
//        for (ConstraintViolation<?> cv : exception.getConstraintViolations()) {
//            var propertyPathValue = cv.getPropertyPath().toString();
//            errors.add(
//                propertyPathValue.substring(propertyPathValue.lastIndexOf(".") + 1) + " : " + cv.getMessage()
//            );
//        }
//        return String.join(", ", errors);
//    }
}

