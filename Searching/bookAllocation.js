function minimizedMaximumPages(books, mid) {
    let std = 1;
    let pages = 0;
    for(let i = 0; i < books.length; i++) {
        if(pages + books[i] <= mid) {
            pages += books[i]
        } else {
            std++;
            pages = books[i];
        }
    }
    return std;
}
function bookAllocation(books, students) {
    let n = books.length;

    let totalPages = 0;
    let maxPages = -1;

    for(let i = 0; i < n; i++) {
        totalPages += books[i];
        maxPages = Math.max(maxPages, books[i]);
    }

    let low = maxPages;
    let high = totalPages;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);

    let  stdCount =  minimizedMaximumPages(books, mid);

        if(stdCount > students) {
            low = mid + 1;;
        } else {
            high = mid - 1;
        }
    }
    return low;
}