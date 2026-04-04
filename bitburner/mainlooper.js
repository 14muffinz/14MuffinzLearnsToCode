// this is code completely ripped off of google that automatically handles one hack at a time

export async function main(ns) {
    let target = "foodnstuff"; 
    let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    let securityThresh = ns.getServerMinSecurityLevel(target) + 5;
    while(true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            await ns.grow(target);
        } else {
            await ns.hack(target);
        } await ns.sleep(1000)
    }
}

// this all loops as intended. my attempts to recreate/extend it... not so much.
