import { SparseSet } from "@jdframe/core"
import { BatchSendCondition } from "./BatchSendCondition"
import { SelectionBuffer } from "./SelectionBuffer"

/**
 * @see SelectionBuffer
 *
 * This is the same as SelectionBuffer but supports gaps on delete
 */
export class SelectionBufferSparse<I> extends SelectionBuffer<I, I | undefined> {
    /**
     *
     */
    protected pendingItems: SparseSet<I>

    /**
     *
     */
    get sparseItems() {
        return this.pendingItems.sparseValues()
    }

    /**
     *
     * @param sendCondition
     * @param delay
     */
    constructor(
        sendCondition?: BatchSendCondition<I>,
        delay = false
    ) {
        super(sendCondition, delay)
        this.pendingItems = new SparseSet<I>()
        this.promise = this.triggerPromise.then(() => [...this.sparseItems])
    }
}
