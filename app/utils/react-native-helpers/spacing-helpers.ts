export const padding = (a: number, b?: number, c?: number, d?: number) => {
  return {
    paddingTop: a,
    paddingRight: b || a,
    paddingBottom: c || a,
    paddingLeft: d || (b || a),
  };
};

export const margin = (a: number, b?: number, c?: number, d?: number) => {
  return {
    marginTop: a,
    marginRight: b || a,
    marginBottom: c || a,
    marginLeft: d || (b || a),
  };
};
