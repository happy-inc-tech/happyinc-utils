/**
 * Класс ноды: нужен для облегчения доступа к данным
 */
class TreeNode<Data extends { id: string; parentId: string | null }> {
    constructor(
        private readonly nodeData: Data,
        private readonly tree: Tree<Data>
    ) {}

    public get data(): Data {
        return this.nodeData;
    }

    public get children(): TreeNode<Data>[] {
        return this.tree.getChildren(this.nodeData.id);
    }

    public get parentNode(): TreeNode<Data> | null {
        if (!this.nodeData.parentId) return null;
        return this.tree.getById(this.nodeData.parentId) ?? null;
    }
}

/**
 * Класс дерева: хранит всю информацию о нодах
 */
export default class Tree<
    Data extends { id: string; parentId: string | null }
> {
    private readonly idsMap = new Map<string, TreeNode<Data>>();
    private readonly parentIdsMap = new Map<string | null, TreeNode<Data>[]>();

    constructor(private readonly source: Data[]) {
        for (const element of source) {
            const node = new TreeNode(element, this);
            this.idsMap.set(element.id, node);
            if (!this.parentIdsMap.has(element.parentId)) {
                this.parentIdsMap.set(element.parentId, [node]);
            }
            this.parentIdsMap.get(element.parentId)!.concat(node);
        }
    }

    public getById(id: string): TreeNode<Data> | null {
        return this.idsMap.get(id) ?? null;
    }

    public getChildren(id: string): TreeNode<Data>[] {
        return this.parentIdsMap.get(id) ?? [];
    }

    public get root(): TreeNode<Data>[] {
        return this.parentIdsMap.get(null) ?? [];
    }
}
