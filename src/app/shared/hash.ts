/**
 * Bietet Hash-Funktionen an
 *
 * @export
 * @class Hash
 */
export class Hash {

  /**
   * Bildet einen SHA256-Hash
   *
   * @static
   * @param {string} stringToHash
   * @returns {string}
   */
  public static sha256(stringToHash: string): string {
    const hexCharsConst = '0123456789abcdef'.split('');
    const extra = [-2147483648, 8388608, 32768, 128];
    const shift = [24, 16, 8, 0];

    // tslint:disable-next-line:max-line-length
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

    const blocks = new Array<any>();

    let code: any;
    let first = true;
    let end = false;
    let i: any;
    let j: any;
    let index = 0;
    let start = 0;
    let bytes = 0;
    const length = stringToHash.length;
    let s0: any;
    let s1: any;
    let maj: any;
    let t1: any;
    let t2: any;
    let ch: any;
    let ab: any;
    let da: any;
    let cd: any;
    let bc: any;
    let h0 = 0x6a09e667;
    let h1 = 0xbb67ae85;
    let h2 = 0x3c6ef372;
    let h3 = 0xa54ff53a;
    let h4 = 0x510e527f;
    let h5 = 0x9b05688c;
    let h6 = 0x1f83d9ab;
    let h7 = 0x5be0cd19;
    let block = 0;

    do {
      blocks[0] = block;
      blocks[1] = 0;
      blocks[2] = 0;
      blocks[3] = 0;
      blocks[4] = 0;
      blocks[5] = 0;
      blocks[6] = 0;
      blocks[7] = 0;
      blocks[8] = 0;
      blocks[9] = 0;
      blocks[10] = 0;
      blocks[11] = 0;
      blocks[12] = 0;
      blocks[13] = 0;
      blocks[14] = 0;
      blocks[15] = 0;
      blocks[16] = 0;
      for (i = start; index < length && i < 64; ++index) {
        code = stringToHash.charCodeAt(index);
        if (code < 0x80) {
          blocks[i >> 2] |= code << shift[i++ & 3];
        } else if (code < 0x800) {
          blocks[i >> 2] |= (0xc0 | (code >> 6)) << shift[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << shift[i++ & 3];
        } else if (code < 0xd800 || code >= 0xe000) {
          blocks[i >> 2] |= (0xe0 | (code >> 12)) << shift[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << shift[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << shift[i++ & 3];
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (stringToHash.charCodeAt(++index) & 0x3ff));
          blocks[i >> 2] |= (0xf0 | (code >> 18)) << shift[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << shift[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << shift[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << shift[i++ & 3];
        }
      }
      bytes += i - start;
      start = i - 64;
      if (index === length) {
        blocks[i >> 2] |= extra[i & 3];
        ++index;
      }
      block = blocks[16];
      if (index > length && i < 56) {
        blocks[15] = bytes << 3;
        end = true;
      }

      let a = h0;
      let b = h1;
      let c = h2;
      let d = h3;
      let e = h4;
      let f = h5;
      let g = h6;
      let h = h7;

      // rotate right
      for (j = 16; j < 64; ++j) {
        t1 = blocks[j - 15];
        s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
        t1 = blocks[j - 2];
        s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
        blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
      }

      bc = b & c;
      for (j = 0; j < 64; j += 4) {
        if (first) {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
          first = false;
        } else {
          s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
          s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
          ab = a & b;
          maj = ab ^ (a & c) ^ bc;
          ch = (e & f) ^ (~e & g);
          t1 = h + s1 + ch + K[j] + blocks[j];
          t2 = s0 + maj;
          h = d + t1 << 0;
          d = t1 + t2 << 0;
        }
        s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
        s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
        da = d & a;
        maj = da ^ (d & b) ^ ab;
        ch = (h & e) ^ (~h & f);
        t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
        t2 = s0 + maj;
        g = c + t1 << 0;
        c = t1 + t2 << 0;
        s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
        s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
        cd = c & d;
        maj = cd ^ (c & a) ^ da;
        ch = (g & h) ^ (~g & e);
        t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
        t2 = s0 + maj;
        f = b + t1 << 0;
        b = t1 + t2 << 0;
        s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
        s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
        bc = b & c;
        maj = bc ^ (b & d) ^ cd;
        ch = (f & g) ^ (~f & h);
        t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
        t2 = s0 + maj;
        e = a + t1 << 0;
        a = t1 + t2 << 0;
      }

      h0 = h0 + a << 0;
      h1 = h1 + b << 0;
      h2 = h2 + c << 0;
      h3 = h3 + d << 0;
      h4 = h4 + e << 0;
      h5 = h5 + f << 0;
      h6 = h6 + g << 0;
      h7 = h7 + h << 0;
    } while (!end);

    return hexCharsConst[(h0 >> 28) & 0x0F] + hexCharsConst[(h0 >> 24) & 0x0F] +
      hexCharsConst[(h0 >> 20) & 0x0F] + hexCharsConst[(h0 >> 16) & 0x0F] +
      hexCharsConst[(h0 >> 12) & 0x0F] + hexCharsConst[(h0 >> 8) & 0x0F] +
      hexCharsConst[(h0 >> 4) & 0x0F] + hexCharsConst[h0 & 0x0F] +
      hexCharsConst[(h1 >> 28) & 0x0F] + hexCharsConst[(h1 >> 24) & 0x0F] +
      hexCharsConst[(h1 >> 20) & 0x0F] + hexCharsConst[(h1 >> 16) & 0x0F] +
      hexCharsConst[(h1 >> 12) & 0x0F] + hexCharsConst[(h1 >> 8) & 0x0F] +
      hexCharsConst[(h1 >> 4) & 0x0F] + hexCharsConst[h1 & 0x0F] +
      hexCharsConst[(h2 >> 28) & 0x0F] + hexCharsConst[(h2 >> 24) & 0x0F] +
      hexCharsConst[(h2 >> 20) & 0x0F] + hexCharsConst[(h2 >> 16) & 0x0F] +
      hexCharsConst[(h2 >> 12) & 0x0F] + hexCharsConst[(h2 >> 8) & 0x0F] +
      hexCharsConst[(h2 >> 4) & 0x0F] + hexCharsConst[h2 & 0x0F] +
      hexCharsConst[(h3 >> 28) & 0x0F] + hexCharsConst[(h3 >> 24) & 0x0F] +
      hexCharsConst[(h3 >> 20) & 0x0F] + hexCharsConst[(h3 >> 16) & 0x0F] +
      hexCharsConst[(h3 >> 12) & 0x0F] + hexCharsConst[(h3 >> 8) & 0x0F] +
      hexCharsConst[(h3 >> 4) & 0x0F] + hexCharsConst[h3 & 0x0F] +
      hexCharsConst[(h4 >> 28) & 0x0F] + hexCharsConst[(h4 >> 24) & 0x0F] +
      hexCharsConst[(h4 >> 20) & 0x0F] + hexCharsConst[(h4 >> 16) & 0x0F] +
      hexCharsConst[(h4 >> 12) & 0x0F] + hexCharsConst[(h4 >> 8) & 0x0F] +
      hexCharsConst[(h4 >> 4) & 0x0F] + hexCharsConst[h4 & 0x0F] +
      hexCharsConst[(h5 >> 28) & 0x0F] + hexCharsConst[(h5 >> 24) & 0x0F] +
      hexCharsConst[(h5 >> 20) & 0x0F] + hexCharsConst[(h5 >> 16) & 0x0F] +
      hexCharsConst[(h5 >> 12) & 0x0F] + hexCharsConst[(h5 >> 8) & 0x0F] +
      hexCharsConst[(h5 >> 4) & 0x0F] + hexCharsConst[h5 & 0x0F] +
      hexCharsConst[(h6 >> 28) & 0x0F] + hexCharsConst[(h6 >> 24) & 0x0F] +
      hexCharsConst[(h6 >> 20) & 0x0F] + hexCharsConst[(h6 >> 16) & 0x0F] +
      hexCharsConst[(h6 >> 12) & 0x0F] + hexCharsConst[(h6 >> 8) & 0x0F] +
      hexCharsConst[(h6 >> 4) & 0x0F] + hexCharsConst[h6 & 0x0F] +
      hexCharsConst[(h7 >> 28) & 0x0F] + hexCharsConst[(h7 >> 24) & 0x0F] +
      hexCharsConst[(h7 >> 20) & 0x0F] + hexCharsConst[(h7 >> 16) & 0x0F] +
      hexCharsConst[(h7 >> 12) & 0x0F] + hexCharsConst[(h7 >> 8) & 0x0F] +
      hexCharsConst[(h7 >> 4) & 0x0F] + hexCharsConst[h7 & 0x0F];
  }
}
