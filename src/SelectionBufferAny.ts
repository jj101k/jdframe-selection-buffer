import { PseudoMap, PseudoSet } from "@jdframe/core"
import { SelectionBuffer } from "./SelectionBuffer"
import { BatchSendCondition } from "./BatchSendCondition"

/**
 * @see SelectionBuffer
 *
 * This is the same as SelectionBuffer but supports non-primitive objects.
 */
export class SelectionBufferAny<K extends string | number, I> extends SelectionBuffer<I> {
    /**
     *
     */
    protected pendingItems: PseudoSet<I>

    /**
     *
     * @param getKey
     * @param sendCondition
     * @param delay
     */
    constructor(
        getKey: (item: I) => K,
        sendCondition?: BatchSendCondition<I>,
        delay = false
    ) {
        super(sendCondition, delay)
        this.pendingItems = new PseudoSet(new PseudoMap(getKey))
    }
}
