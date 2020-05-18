"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextItemFromSearch = exports.chunk = exports.getPrevIndex = exports.getNextIndex = exports.removeItem = exports.addItem = exports.removeIndex = exports.getNextItem = exports.getPrevItem = exports.getLastItem = exports.getFirstItem = void 0;
var tslib_1 = require("tslib");
function getFirstItem(array) {
    return array != null && array.length ? array[0] : undefined;
}
exports.getFirstItem = getFirstItem;
function getLastItem(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
exports.getLastItem = getLastItem;
function getPrevItem(index, array, loop) {
    if (loop === void 0) { loop = true; }
    var prevIndex = getPrevIndex(index, array.length, loop);
    return array[prevIndex];
}
exports.getPrevItem = getPrevItem;
function getNextItem(index, array, loop) {
    if (loop === void 0) { loop = true; }
    var nextIndex = getNextIndex(index, array.length, 1, loop);
    return array[nextIndex];
}
exports.getNextItem = getNextItem;
function removeIndex(array, index) {
    return array.filter(function (_, idx) { return idx !== index; });
}
exports.removeIndex = removeIndex;
function addItem(array, item) {
    return tslib_1.__spreadArrays(array, [item]);
}
exports.addItem = addItem;
function removeItem(array, item) {
    return array.filter(function (eachItem) { return eachItem !== item; });
}
exports.removeItem = removeItem;
/**
 * Get the next index based on the current index and step.
 *
 * @param currentIndex the current index
 * @param length the total length or count of items
 * @param step the number of steps
 * @param loop whether to circle back once `currentIndex` is at the start/end
 */
function getNextIndex(currentIndex, length, step, loop) {
    if (step === void 0) { step = 1; }
    if (loop === void 0) { loop = true; }
    var lastIndex = length - 1;
    if (currentIndex === -1) {
        return step > 0 ? 0 : lastIndex;
    }
    var nextIndex = currentIndex + step;
    if (nextIndex < 0) {
        return loop ? lastIndex : 0;
    }
    if (nextIndex >= length) {
        if (loop)
            return 0;
        return currentIndex > length ? length : currentIndex;
    }
    return nextIndex;
}
exports.getNextIndex = getNextIndex;
/**
 * Get's the previous index based on the current index.
 * Mostly used for keyboard navigation.
 *
 * @param index - the current index
 * @param count - the length or total count of items in the array
 * @param loop - whether we should circle back to the
 * first/last once `currentIndex` is at the start/end
 */
function getPrevIndex(currentIndex, count, loop) {
    if (loop === void 0) { loop = true; }
    return getNextIndex(currentIndex, count, -1, loop);
}
exports.getPrevIndex = getPrevIndex;
/**
 * Converts an array into smaller chunks or groups.
 *
 * @param array the array to chunk into group
 * @param size the length of each chunk
 */
function chunk(array, size) {
    return array.reduce(function (rows, currentValue, index) {
        if (index % size === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.chunk = chunk;
/**
 * Gets the next item based on a search string
 *
 * @param items array of items
 * @param searchString the search string
 * @param itemToString resolves an item to string
 * @param currentItem the current selected item
 */
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
    if (!searchString)
        return null;
    // If current value doesn't exist, find the item that match the search string
    if (!currentItem) {
        var foundItem = items.find(function (item) {
            return itemToString(item)
                .toLowerCase()
                .startsWith(searchString.toLowerCase());
        });
        return foundItem || currentItem;
    }
    // Filter items for ones that match the search string (case insensitive)
    var searchResults = items.filter(function (item) {
        return itemToString(item)
            .toLowerCase()
            .startsWith(searchString.toLowerCase());
    });
    // If there's a match, let's get the next item to select
    if (searchResults.length) {
        var nextIndex = void 0;
        // If the currentItem is in the available items, we move to the next available option
        if (searchResults.includes(currentItem)) {
            var currentIndex = searchResults.indexOf(currentItem);
            nextIndex = currentIndex + 1;
            if (nextIndex === searchResults.length) {
                nextIndex = 0;
            }
            return searchResults[nextIndex];
        }
        else {
            // Else, we pick the first item in the available items
            nextIndex = items.indexOf(searchResults[0]);
            return items[nextIndex];
        }
    }
    // a decent fallback to the currentItem
    return currentItem;
}
exports.getNextItemFromSearch = getNextItemFromSearch;
//# sourceMappingURL=array.js.map