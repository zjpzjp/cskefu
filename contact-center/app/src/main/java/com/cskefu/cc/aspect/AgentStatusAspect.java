/*
 * Copyright (C) 2019-2022 Chatopera Inc, <https://www.chatopera.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.cskefu.cc.aspect;

import com.cskefu.cc.cache.Cache;
import com.cskefu.cc.model.AgentStatus;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 */
@Aspect
@Component
public class AgentStatusAspect {
    private final static Logger logger = LoggerFactory.getLogger(AgentStatusAspect.class);

    @Autowired
    private Cache cache;

    @After("execution(* com.cskefu.cc.persistence.repository.AgentStatusRepository.save(..))")
    public void save(final JoinPoint joinPoint) {
        final AgentStatus agentStatus = (AgentStatus) joinPoint.getArgs()[0];
        cache.putAgentStatus(agentStatus);
    }

    @After("execution(* com.cskefu.cc.persistence.repository.AgentStatusRepository.delete(..))")
    public void delete(final JoinPoint joinPoint) {
        final AgentStatus agentStatus = (AgentStatus) joinPoint.getArgs()[0];
        cache.deleteAgentStatusByAgentno(agentStatus.getAgentno());
    }
}