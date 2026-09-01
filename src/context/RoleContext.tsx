"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, Suspense } from "react";
import { RoleId, ROLES, RoleConfig } from "@/data/portfolioData";

interface RoleContextType {
  activeRole: RoleId;
  setActiveRole: (role: RoleId) => void;
  roleConfig: RoleConfig;
}

const defaultContextValue: RoleContextType = {
  activeRole: "all",
  setActiveRole: () => {},
  roleConfig: ROLES.all,
};

const RoleContext = createContext<RoleContextType>(defaultContextValue);

function normalizeRoleParam(param: string | null): RoleId {
  if (!param) return "all";
  const p = param.toLowerCase().trim();
  if (p === "ba" || p === "business-analyst" || p === "business_analyst" || p === "businessanalyst") {
    return "ba";
  }
  if (p === "data" || p === "data-analyst" || p === "data_analyst" || p === "dataanalyst" || p === "bi" || p === "bi-analyst") {
    return "data";
  }
  if (p === "swe" || p === "software-engineer" || p === "software_engineer" || p === "softwareengineer" || p === "developer" || p === "flutter") {
    return "swe";
  }
  return "all";
}

function RoleUrlSync({ setActiveRole }: { setActiveRole: (role: RoleId) => void }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const roleParam = urlParams.get("role");
      if (roleParam) {
        setActiveRole(normalizeRoleParam(roleParam));
      }
    }
  }, [setActiveRole]);

  return null;
}

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [activeRole, setActiveRoleState] = useState<RoleId>("all");

  const setActiveRole = useCallback((role: RoleId) => {
    setActiveRoleState(role);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (role === "all") {
        url.searchParams.delete("role");
      } else {
        url.searchParams.set("role", role);
      }
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const roleConfig = ROLES[activeRole] || ROLES.all;

  return (
    <RoleContext.Provider value={{ activeRole, setActiveRole, roleConfig }}>
      <Suspense fallback={null}>
        <RoleUrlSync setActiveRole={setActiveRoleState} />
      </Suspense>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
