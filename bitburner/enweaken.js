// i... completely redid this code. I realised it was wasting time constantly weakening n00dles when it didn't need to
// next up is definitely modifying masterclass becuase i just realised i'm a dunce who put everything in the 'else' when I really shouldn't have

/** @param {NS} ns */
export async function main(ns) {
     var target = "n00dles";
     var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
     var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
     while (true) {
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          }
          await ns.hack(target)
       // i might take out the hack step later, but it only hacks if it's already at the minimum weakness so... no harm no foul?
       // i just realised it's actually not set up like that. new update coming soon
          var target = "foodnstuff"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          }
          await ns.hack(target)
          var target = "sigma-cosmetics"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          }
          await ns.hack(target)
          var target = "joesguns"
          if (ns.getServerSecurityLevel(target) != ns.getServerMinSecurityLevel(target)) {
               await ns.weaken(target);
          }
     }
}
