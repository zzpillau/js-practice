const removeFirstLevel = (tree) => {
    const newTree = tree.reduce((acc, el) => {
        if (Array.isArray(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
    return newTree.flat();
}

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
console.log(removeFirstLevel(tree2));