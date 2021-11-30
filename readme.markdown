# longreads

A minimalist JS library for bookmarking sections in longform web textual content.
This helps your website remember the last section of text a visitor has been
reading, all without the necessity of a backend store.

The emphasis on minimalism has two objectives:

- Have little to no third party dependencies.
- Do one thing, and only one thing, well.

## Usage

The library exposes three methods:

- `setBookmark(article: string, section: string): void`
- `getBookmark(article: string): string`
- `isCurrentlyViewed(section: string): boolean` is a helper function to
determine whether your visitor has reached the given section.

`article` is a unique string that identifies the piece of text a visitor could
read.

`section` is an id in your document. Consider this as in in-page anchors.
