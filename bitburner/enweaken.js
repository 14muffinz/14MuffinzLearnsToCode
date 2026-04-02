// i... completely redid this code. I realised it was wasting time constantly weakening n00dles when it didn't need to
// next up is definitely modifying masterclass becuase i just realised i'm a dunce who put everything in the 'else' when I really shouldn't have

/** @param {NS} ns */
/** @param {NS} ns */
export async function main(ns) {
     var target = "n00dles";
     var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
     var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
     while (true) {
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          } else {
               await ns.hack(target)
          }
          var target = "foodnstuff"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target) //embarassingly, i forgot  this line before.
          } else {
               await ns.hack(target)
          }
          var target = "sigma-cosmetics"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          } else {
               await ns.hack(target)
          }
          var target = "joesguns"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          } else {
               await ns.hack(target)
          }
          // finally put these into the template
          // much easier to remove than whatever is happening in masterclass. thank goodness!
          var target = "hong-fang-tea"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          } else {
               await ns.hack(target)
          }
          var target = "harakiri-sushi"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          }
     }
}
