class DocumentCookieManager {
    private cookieValMap: any;

    constructor(){
        this.updateCookieValMap();
    }

    private updateCookieValMap(): void {
        document.cookie.split("; ").map((valMapping: string) => {
            const kvParse = valMapping.split("=");
            this.cookieValMap[kvParse[0]] = kvParse[1];
        });
    }

    public add(key: string, value: string): void {
        document.cookie = `${key}=${value}; Secure`;
        this.updateCookieValMap();
    }

    public getVal(key: string): string {
        return this.cookieValMap[key];
    }
}

const dcm = new DocumentCookieManager();

export function setBookmark(article: string, section: string): void {
}
