// this is code completely ripped off of google that automatically handles one hack at a time

export async function main(ns) {
     let target = "hong-fang-tea";
     let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
     let securityThresh = ns.getServerMinSecurityLevel(target) + 5;
     while (true) {
          if (ns.getServerSecurityLevel(target) > securityThresh) {
               await ns.weaken(target);
               await ns.sleep(500);
          } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
               await ns.grow(target);
               await ns.sleep(500);
          } else {
               await ns.hack(target);
               await ns.sleep(500);
          }
     }
}
// added a sleep, not sure if it's necessary, but i hope to reduce lag
// this all loops as intended. my attempts to recreate/extend it... not so much.
