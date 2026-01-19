export function validateAddTaskCommand(args: string[]): { isValid: boolean; error?: string } {
    // Format: add <taskName> <description> <time> <completed>
    if (args.length < 5) {
        return {
            isValid: false,
            error: "Invalid command. Usage: add <taskName> <description> <time> <completed(true/false)>"
        };
    }
    
    // Validate completed flag
    const completedValue = args[4].toLowerCase();
    if (completedValue !== 'true' && completedValue !== 'false') {
        return {
            isValid: false,
            error: "Completed flag must be 'true' or 'false'"
        };
    }
    
    return { isValid: true };
}