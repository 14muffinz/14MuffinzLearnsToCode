// this one is for when you first unlock a specific server and need to grow it a lot. 
export async function main(ns) {
     let target = "foodnstuff";
     let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
     let securityThresh = ns.getServerMinSecurityLevel(target) + 5;
     while (true) {
          if ((ns.getServerSecurityLevel(target) > securityThresh) && (ns.getServerMoneyAvailable(target) < moneyThresh)) {
               await ns.grow(target);
               await ns.weaken(target);
               await ns.weaken(target);
               await ns.weaken(target);
          } else if ((ns.getServerSecurityLevel(target) <= securityThresh) && (ns.getServerMoneyAvailable(target) < moneyThresh)) {
               await ns.grow(target)
          } else if ((ns.getServerSecurityLevel(target) > securityThresh) && (ns.getServerMoneyAvailable(target) >= moneyThresh)) {
               await ns.weaken(target);
          } else {
               await ns.hack(target);
          } await ns.sleep(1000)
     }
}
