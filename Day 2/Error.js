// try...catch
// try...finally
// try...catch...finally
/*
    try {
        tryStatements;
    } catch (exceptionVar) {
        catchStatements;
    } finally {
        finallyStatements;
    }
*/

try {
	throw new TypeError("name");
} catch (e) {
	console.dir(e);
	// e = {name: exception_name, message: exception_message, stack: stack_line_error}
}
