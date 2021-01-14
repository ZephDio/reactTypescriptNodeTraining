export function verify(req: any) {
  if (!(req.body.x && req.body.x > 0 && req.body.x <= 200)) return false;
  if (!(req.body.y && req.body.y > 0 && req.body.y <= 200)) return false;
  return true;
}
