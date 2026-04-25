//i only just realised how out of date this code is, lol

/** @param {NS} ns */
export async function main(ns) {
     var target = "n00dles";
     var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
     var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
     while (true) {
          var target = "n00dles";
          if (ns.getServerSecurityLevel(target) >= ns.getServerMinSecurityLevel(target) + .050) {
               await ns.weaken(target);
               await ns.sleep(1000)
          } else {
               await ns.hack(target)
               await ns.sleep(1000)
          }
          var target = "nectar-net"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
               await ns.sleep(1000)
          } else {
               await ns.sleep(1000)
          }
          var target = "hong-fang-tea"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
               await ns.sleep(1000)
          } else {
               await ns.sleep(1000)
          }
          var target = "harakiri-sushi"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
               await ns.sleep(1000)
          } else {
               await ns.sleep(1000)
          }
          var target = "zer0"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
               await ns.sleep(1000)
          } else {
               await ns.sleep(1000)
          }
          var target = "phantasy"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
               await ns.sleep(1000)
          } else {
               await ns.sleep(1000)
          }
     }
}
