window.t = window.t || function(key, vars){
  let s = String(key);
  if (vars) for (const [k,v] of Object.entries(vars)) s=s.replaceAll(`{${k}}`, v);
  return s;
};
