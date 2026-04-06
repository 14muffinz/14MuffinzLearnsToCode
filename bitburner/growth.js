// yeah the old code was weird. here's one that grows everything (as a parallel to enweaken)
export async function main(ns) {
     var target = "n00dles";
     var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
     while (true) {
          var target = "n00dles";
          if (ns.getServerMoneyAvailable(target) != ns.getServerMaxMoney(target)) {
               await ns.grow(target);
               await ns.sleep(500)
          } else {
               await ns.hack(target)
          }
          var target = "foodnstuff"
          if (ns.getServerMoneyAvailable(target) != ns.getServerMaxMoney(target)) {
               await ns.grow(target)
               await ns.sleep(500)
          } else {
               await ns.hack(target)
          }
          var target = "sigma-cosmetics"
          if (ns.getServerMoneyAvailable(target) != ns.getServerMaxMoney(target)) {
               await ns.grow(target);
               await ns.sleep(500)
          } else {
               await ns.hack(target)
          }
          var target = "joesguns"
          if (ns.getServerMoneyAvailable(target) != ns.getServerMaxMoney(target)) {
               await ns.grow(target);
               await ns.sleep(500)
          } else {
               await ns.hack(target)
          }
          var target = "hong-fang-tea"
          if (ns.getServerMoneyAvailable(target) != ns.getServerMaxMoney(target)) {
               await ns.grow(target);
               await ns.sleep(500)
          } else {
               await ns.hack(target)
          }
          var target = "harakiri-sushi"
          if (ns.getServerMoneyAvailable(target) != ns.getServerMaxMoney(target)) {
               await ns.grow(target);
               await ns.sleep(500)
          }
     }
}
