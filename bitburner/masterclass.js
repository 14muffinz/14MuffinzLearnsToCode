// I'm having an issue getting this to loop actions until it can hack. 
// No idea if it's even feasible to create atp, but i'm trying.

export async function main(ns) {
  let target = "n00dles";
  let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
  let securityThresh = ns.getServerMinSecurityLevel(target) + 5;
  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      await ns.weaken(target);
    } else {
      await ns.hack(target);
      let securityThresh = ns.getServerMinSecurityLevel("foodnstuff") + 5;
      if (ns.getServerSecurityLevel("foodnstuff") > securityThresh) {
        await ns.weaken("foodnstuff");
      } else {
        await ns.hack("foodnstuff");
        let securityThresh = ns.getServerMinSecurityLevel("sigma-cosmetics") + 5;
        if (ns.getServerSecurityLevel("sigma-cosmetics") > securityThresh) {
          await ns.weaken("sigma-cosmetics");
        } else {
          await ns.hack("sigma-cosmetics");
        }
      }
    }
  }
}
