import $ from 'jquery';
export function initOrder(manager, orderItem, resetManager_ = true, orderChangedCallback) {
    if (resetManager_) resetManager(manager);
    else syncManagerOrders(manager, orderItem);
    $(manager).children(orderItem).each((_i, e) => {
        $(e).on('click', () => {
            handleClick(e, manager, orderItem);
            orderChangedCallback(getOrder(manager));
            syncData(e);
        });
    });
}

export function getOrder(manager) {
    return $(manager).data('orders');
}

function syncData(e) {
    if ($(e).data('ordered') && $(e).data('order')) {
        $(e).children('.image-order').addClass('ordered');
        $(e).children('.image-order').text($(e).data('order'));
    }
    else {
        $(e).children('.image-order').removeClass('ordered');
        $(e).children('.image-order').text('');
    }
}

function handleClick(e, manager, orderItem) {
    if ($(e).data('ordered')) {
        const order = getOrder(manager);
        const index = order.indexOf(e);
        if (index > -1) {
            order.splice(index, 1);
            $(e).data('ordered', false);
            $(e).data('order', -1);

            //check if there is selected items with a bigger
            //index than the one being deselected right now.
            $(manager).children(orderItem).each((i, item) => {
                if (!$(item).data('ordered')) return;
                const itemOrder = $(item).data('order');
                if (itemOrder > index) {
                    $(item).data('order', itemOrder - 1)
                    syncData(item);
                }
            });
            syncManagerOrders(manager, orderItem);
        }
        return;
    }
    if (getOrder(manager).length >= $(manager).children(orderItem).length) return resetOrder(manager);
    const currIndx = $(manager).data('orderIndx') + 1;
    $(manager).data('orderIndx', currIndx);
    var orders = $(manager).data('orders');
    orders.push(e);
    $(manager).data('orders', orders);
    $(e).data('ordered', true);
    $(e).data('order', currIndx);

    //move selected item to its nth place
    return;
    const nthElement = $(manager).children(orderItem).eq($(manager).data('orderIndx') - 1);
    $(e).insertBefore(nthElement);
}

function syncManagerOrders(manager, orderItem) {
    const orders = getOrder(manager);
    $(manager).data('orderIndx', orders.length);
    orders.forEach((e, i) => {
        $(manager).children(`[data-id=${$(e).attr('data-id')}]`).replaceWith(e);
        return;
        const nthElement = $(manager).children(orderItem).eq(i);
        $(e).insertBefore(nthElement);
    });
}

function resetOrder(manager) {
    $(manager).children().each((i, e) => {
        $(e).data('ordered', false);
        $(e).data('order', -1);
        syncData(e);
    });
    resetManager(manager);
}

function resetManager(manager) {
    $(manager).data('orderIndx', 0);
    $(manager).data('orders', []);
}