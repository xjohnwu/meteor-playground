const { PublicClient } = require('@okfe/okex-node');

export async function getOkexFutures() {
    const pClient = new PublicClient();

    // code to run on server at startup
    let futures = pClient.futures();
    let instruments = await futures.getInstruments();
    console.log(instruments);
    return instruments;
}