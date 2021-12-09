// https://exercism.org/tracks/javascript/exercises/fruit-picker/

export function compareStatus(status) {
    return status === 'ONLINE';
}

export function isServiceOnline() {
   return checkStatus(compareStatus);
}

export function pickFruit(variety, quantity, callback) {
  return checkInventory({ 'variety': variety, 'quantity': quantity}, callback)
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err) throw new Error('There is an error!');
  else if (isAvailable) return 'PURCHASE';
  else return 'NOOP';
}

export function pickAndPurchaseFruit(variety, quantity) {
  return pickFruit(variety, quantity, purchaseInventoryIfAvailable);
}
