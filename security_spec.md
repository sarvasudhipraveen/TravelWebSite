# TripVerse Security Specification

## Data Invariants
- A booking must belong to a valid user.
- A user can only read and write their own profile and bookings.
- Packages are read-only for standard users, writeable by admins.
- Timestamps must be server-generated.

## The Dirty Dozen Payloads (Target: Deny)
1. **Identity Spoofing**: User A tries to update User B's profile.
2. **Role Escalation**: User A tries to set `role: "admin"` on their own profile.
3. **Ghost Fields**: Adding `isVerified: true` to a booking.
4. **Invalid Type**: Setting `amount: "one thousand"` (string instead of number).
5. **ID Poisoning**: Creating a booking with a 2MB string as document ID.
6. **Immutable field change**: Trying to change `createdAt` on an existing booking.
7. **Future/Past Timestamps**: Providing a client-side `updatedAt` far in the future.
8. **Orphaned record**: Creating a booking for a `userId` that doesn't exist.
9. **Resource Exhaustion**: Sending an array of 50,000 wishlist items.
10. **State Shortcut**: Changing a booking status from `upcoming` straight to `refunded` if that's not allowed.
11. **PII Leak**: Authenticated user trying to list all users' emails.
12. **Query Scraping**: Authenticated user trying to `get` a booking by ID without being the owner.
