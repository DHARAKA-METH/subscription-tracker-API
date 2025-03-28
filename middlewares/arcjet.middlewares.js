import aj from "../config/arcject.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 }); // Deduct 5 tokens from the bucket
    console.log("Arcjet decision", decision);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .send({ error: "Rate limit exceeded. Please try again later." });
      }
      if (decision.reason.isBot()) {
        return res.status(429).send({ error: "Bot detected." });
      }

      return res.status(403).json({ error: "access Denied" });
    }

    next();
  } catch (error) {
    console.log(`Arcjet Middleware error: ${error}`);
    next(error);
  }
};

export default arcjetMiddleware;
