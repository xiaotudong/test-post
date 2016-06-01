function collect_same_elements(collection_a, object_b) {
    var new_collection = collectSameElements(collection_a, object_b);
    return new_collection;
}

function collectSameElements(collection_a, object_b) {
    var new_collection = [];
    for (var i = 0; i < collection_a.length; i++) {
        if (isExsite(collection_a[i].key, object_b)) {
            new_collection.push(collection_a[i].key);
        }
    }
    return new_collection;
}

function isExsite(a, b) {
    for (var j = 0; j < b.value.length; j++) {
        if (a === b.value[j]) {
            return true;
        }
    }
}

module.exports = collect_same_elements;
