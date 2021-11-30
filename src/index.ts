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
    dcm.add(article, section);
}

export function getBookmark(article: string): string {
    return dcm.getVal(article);
}

function isInViewPort(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function getCurrentlyViewed(): string[] {
    return [].slice.call(document.getElementsByTagName("section"))
        .filter(isInViewPort)
        // TODO Is a sort necessary? Check docs!
        .sort((el1: HTMLElement, el2: HTMLElement) => {
            const rec1 = el1.getBoundingClientRect();
            const rec2 = el2.getBoundingClientRect();
            if (rec1.top < rec2.top) {
                return -1;
            } else if (rec1.top > rec2.top) {
                return 1;
            } else {
                return 0;
            }
        });
}
