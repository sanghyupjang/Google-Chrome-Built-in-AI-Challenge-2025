//  Chrome Built-in AI API
class ChromeAIIntegration {
    async checkAIAvailability() {
        if ('ai' in window) {
            return await window.ai.canCreateTextSession();
        }
        return false;
    }
    
    async createSession() {
        if (await this.checkAIAvailability()) {
            return await window.ai.createTextSession();
        }
        throw new Error('AI API not available');
    }
}