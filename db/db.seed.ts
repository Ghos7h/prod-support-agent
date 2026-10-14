import { db } from "./db";
import { errorKnowledgeTable } from "./schema";

export async function seed() {
  console.log("Seeding error knowledge data...");

  await db.insert(errorKnowledgeTable).values([
    {
      id: "ERR001",
      errorKeyword: "connection pool exhausted",
      rootCause: "All database connections are currently in use.",
      resolution:
        "Restart the application, check active database sessions, and increase the connection pool size if necessary.",
      runbookUrl: "https://wiki.company.com/runbooks/db-pool",
    },
    {
      id: "ERR002",
      errorKeyword: "ORA-00028",
      rootCause: "Oracle database session was terminated by a DBA.",
      resolution:
        "Ask the user to log in again and verify any recent DBA activities.",
      runbookUrl: "https://wiki.company.com/runbooks/oracle-session",
    },
    {
      id: "ERR003",
      errorKeyword: "ECONNREFUSED",
      rootCause: "The target service is unavailable or refusing connections.",
      resolution:
        "Verify service health, pod status, network connectivity, and firewall rules.",
      runbookUrl: "https://wiki.company.com/runbooks/network",
    },
    {
      id: "ERR004",
      errorKeyword: "timeout expired",
      rootCause:
        "A downstream service failed to respond within the configured timeout period.",
      resolution:
        "Check dependent service health and retry the operation after verification.",
      runbookUrl: "https://wiki.company.com/runbooks/timeouts",
    },
    {
      id: "ERR005",
      errorKeyword: "401 unauthorized",
      rootCause: "Authentication token is invalid, expired, or missing.",
      resolution:
        "Generate a new token and verify authentication configuration.",
      runbookUrl: "https://wiki.company.com/runbooks/authentication",
    },
    {
      id: "ERR006",
      errorKeyword: "403 forbidden",
      rootCause: "User does not have sufficient permissions.",
      resolution: "Validate user access rights and role assignments.",
      runbookUrl: "https://wiki.company.com/runbooks/authorization",
    },
    {
      id: "ERR007",
      errorKeyword: "out of memory",
      rootCause: "Application memory usage exceeded configured limits.",
      resolution:
        "Restart the service, analyse heap usage, and increase memory allocation if required.",
      runbookUrl: "https://wiki.company.com/runbooks/memory",
    },
    {
      id: "ERR008",
      errorKeyword: "kafka broker not available",
      rootCause: "Kafka broker is unavailable or unreachable.",
      resolution: "Verify Kafka cluster health and broker connectivity.",
      runbookUrl: "https://wiki.company.com/runbooks/kafka",
    },
    {
      id: "ERR009",
      errorKeyword: "unable to connect to redis",
      rootCause: "Redis server is unavailable or network connectivity failed.",
      resolution:
        "Check Redis server status, credentials, and network configuration.",
      runbookUrl: "https://wiki.company.com/runbooks/redis",
    },
    {
      id: "ERR010",
      errorKeyword: "disk space exceeded",
      rootCause: "Server filesystem has run out of available disk space.",
      resolution:
        "Delete old logs, archive unused files, and expand storage capacity if necessary.",
      runbookUrl: "https://wiki.company.com/runbooks/disk-space",
    },
    {
      id: "ERR011",
      errorKeyword: "Failed to acquire JDBC Connection",
      rootCause: "Application could not obtain a database connection.",
      resolution:
        "Verify database availability, connection pool settings, and database credentials.",
      runbookUrl: "https://wiki.company.com/runbooks/jdbc",
    },
    {
      id: "ERR012",
      errorKeyword: "Too many connections",
      rootCause: "Database maximum connection limit exceeded.",
      resolution:
        "Review active sessions, terminate idle connections, and increase limits if necessary.",
      runbookUrl: "https://wiki.company.com/runbooks/db-connections",
    },
    {
      id: "ERR013",
      errorKeyword: "Deadlock detected",
      rootCause: "Multiple transactions are waiting on each other.",
      resolution:
        "Identify conflicting transactions and optimise transaction ordering.",
      runbookUrl: "https://wiki.company.com/runbooks/deadlock",
    },
    {
      id: "ERR014",
      errorKeyword: "JWT token expired",
      rootCause: "The authentication token has expired.",
      resolution: "Generate a new token and re-authenticate the user.",
      runbookUrl: "https://wiki.company.com/runbooks/jwt",
    },
    {
      id: "ERR015",
      errorKeyword: "503 Service Unavailable",
      rootCause: "Application service is unavailable.",
      resolution:
        "Check service health, deployment status, and application logs.",
      runbookUrl: "https://wiki.company.com/runbooks/service-unavailable",
    },
    {
      id: "ERR016",
      errorKeyword: "429 Too Many Requests",
      rootCause: "API rate limit exceeded.",
      resolution: "Reduce request rate or increase rate limit configuration.",
      runbookUrl: "https://wiki.company.com/runbooks/rate-limits",
    },
    {
      id: "ERR017",
      errorKeyword: "Read timed out",
      rootCause: "Remote service took too long to respond.",
      resolution:
        "Verify downstream service health and increase timeout settings if required.",
      runbookUrl: "https://wiki.company.com/runbooks/read-timeout",
    },
    {
      id: "ERR018",
      errorKeyword: "No route to host",
      rootCause: "Network path to destination server is unavailable.",
      resolution: "Verify DNS, firewall, routing, and network configuration.",
      runbookUrl: "https://wiki.company.com/runbooks/network-routing",
    },
    {
      id: "ERR019",
      errorKeyword: "UnknownHostException",
      rootCause: "Hostname could not be resolved.",
      resolution: "Check DNS configuration and hostname accuracy.",
      runbookUrl: "https://wiki.company.com/runbooks/dns",
    },
    {
      id: "ERR020",
      errorKeyword: "SSLHandshakeException",
      rootCause: "SSL certificate validation failed.",
      resolution:
        "Verify certificate validity, trust store configuration, and expiry dates.",
      runbookUrl: "https://wiki.company.com/runbooks/ssl",
    },
    {
      id: "ERR021",
      errorKeyword: "ImagePullBackOff",
      rootCause: "Kubernetes failed to pull container image.",
      resolution:
        "Verify image name, registry accessibility, and imagePullSecrets.",
      runbookUrl: "https://wiki.company.com/runbooks/imagepullbackoff",
    },
    {
      id: "ERR022",
      errorKeyword: "CrashLoopBackOff",
      rootCause: "Application container continuously fails during startup.",
      resolution:
        "Review pod logs, startup configuration, environment variables, and dependencies.",
      runbookUrl: "https://wiki.company.com/runbooks/crashloop",
    },
    {
      id: "ERR023",
      errorKeyword: "OOMKilled",
      rootCause: "Container exceeded memory limits.",
      resolution:
        "Increase memory limits and investigate application memory consumption.",
      runbookUrl: "https://wiki.company.com/runbooks/oom",
    },
    {
      id: "ERR024",
      errorKeyword: "Unable to connect to Kafka broker",
      rootCause: "Kafka broker is unreachable.",
      resolution:
        "Check broker availability, network connectivity, and bootstrap server configuration.",
      runbookUrl: "https://wiki.company.com/runbooks/kafka",
    },
    {
      id: "ERR025",
      errorKeyword: "Consumer group rebalance",
      rootCause: "Kafka consumer group membership changed unexpectedly.",
      resolution: "Review consumer health and inspect broker logs.",
      runbookUrl: "https://wiki.company.com/runbooks/consumer-rebalance",
    },
    {
      id: "ERR026",
      errorKeyword: "Redis connection timeout",
      rootCause: "Application cannot establish connection with Redis.",
      resolution:
        "Verify Redis health, authentication settings, and network connectivity.",
      runbookUrl: "https://wiki.company.com/runbooks/redis-timeout",
    },
    {
      id: "ERR027",
      errorKeyword: "Lock wait timeout exceeded",
      rootCause: "Database row lock contention detected.",
      resolution:
        "Investigate long-running transactions and locking behaviour.",
      runbookUrl: "https://wiki.company.com/runbooks/db-locking",
    },
    {
      id: "ERR028",
      errorKeyword: "ORA-12154",
      rootCause: "Oracle TNS connection information could not be resolved.",
      resolution: "Verify tnsnames.ora configuration and network settings.",
      runbookUrl: "https://wiki.company.com/runbooks/oracle-tns",
    },
    {
      id: "ERR029",
      errorKeyword: "ORA-12514",
      rootCause: "Oracle listener does not recognise requested service.",
      resolution: "Verify listener configuration and service registration.",
      runbookUrl: "https://wiki.company.com/runbooks/oracle-listener",
    },
    {
      id: "ERR030",
      errorKeyword: "NullPointerException",
      rootCause: "Application attempted to access a null object reference.",
      resolution:
        "Review stack trace, identify null values, and add defensive checks.",
      runbookUrl: "https://wiki.company.com/runbooks/npe",
    },
  ]);

  console.log("Error knowledge data seeded successfully.");
}

seed();
